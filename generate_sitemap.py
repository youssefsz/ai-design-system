import os
import datetime
import xml.etree.ElementTree as ET
from xml.dom import minidom

# You can change this to your actual domain later
DOMAIN = "https://ai-design-system.youssef.tn"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def create_sitemap():
    urlset = ET.Element('urlset', xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            if file.endswith('.html'):
                # Get the relative path from the script location
                rel_path = os.path.relpath(os.path.join(root, file), BASE_DIR)
                rel_path = rel_path.replace("\\", "/") # Normalize slashes
                
                # Treat the root index.html specially
                if rel_path == 'index.html':
                    url_loc = f"{DOMAIN}/"
                    priority_val = "1.0"
                    freq_val = "weekly"
                else:
                    url_loc = f"{DOMAIN}/{rel_path}"
                    priority_val = "0.8"
                    freq_val = "monthly"
                
                url = ET.SubElement(urlset, 'url')
                
                loc = ET.SubElement(url, 'loc')
                loc.text = url_loc
                
                # Use current date for lastmod (or you could use os.path.getmtime)
                lastmod = ET.SubElement(url, 'lastmod')
                mod_time = os.path.getmtime(os.path.join(root, file))
                lastmod.text = datetime.datetime.fromtimestamp(mod_time).strftime("%Y-%m-%d")
                
                changefreq = ET.SubElement(url, 'changefreq')
                changefreq.text = freq_val
                
                priority = ET.SubElement(url, 'priority')
                priority.text = priority_val

    # Pretty print XML
    xml_str = ET.tostring(urlset, 'utf-8')
    parsed_xml = minidom.parseString(xml_str)
    pretty_xml = parsed_xml.toprettyxml(indent="  ")
    
    # Remove empty lines minidom usually adds
    pretty_xml = os.linesep.join([s for s in pretty_xml.splitlines() if s.strip()])
    
    sitemap_path = os.path.join(BASE_DIR, 'sitemap.xml')
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(pretty_xml)
        
    print(f"Sitemap successfully generated at {sitemap_path} with {len(urlset)} entries.")

if __name__ == "__main__":
    create_sitemap()
