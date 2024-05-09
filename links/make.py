import os
def generate_html(input_file):
    html_content = ''
    current_section = ''
    
    try:
        with open(input_file, 'r') as file:
            for line in file:
                line = line.strip()
                if line.startswith('#'):  # New section begins
                    if current_section:  # Close the previous section if there was one
                        html_content += '    </div>\n'
                    section_title = line[1:].strip()
                    html_content += (
                        f'        <div class="row">\n'
                        f'          <div class="col-md-12">\n'
                        f'            <h1><strong>{section_title}</strong></h1>\n'
                        f'          </div>\n'
                        f'        </div>\n'
                        f'        <div class="row">\n'
                    )
                    current_section = section_title
                elif line:  # Process link lines
                    parts = line.split(',')
                    if len(parts) == 4:
                        url, title, description, style = parts
                        print("Adding link:", title, "to section:", current_section)
                        html_content += (
                            f'            <a href="{url}">\n'
                            f'              <div class="col-sm-2 col-xs-4">\n'
                            f'                <div class="tile {style}">\n'
                            f'                  <h3 class="title">{title}</h3>\n'
                            f'                  <p>{description}</p>\n'
                            f'                </div>\n'
                            f'              </div>\n'
                            f'            </a>\n'
                        )
                    else:
                        print("Skipping line:", line)

            # Close the last section's row div if there was at least one section
            if current_section:
                html_content += '    </div>\n'

    except FileNotFoundError:
        print("File not found. Please check the filename and path.")
        return

    return html_content

scripts_directory = os.path.dirname(os.path.realpath(__file__))
# input file is list.csv in the script's directory
input_file = os.path.join(scripts_directory, 'list.csv')
template_file = os.path.join(scripts_directory, 'template.html')
template_file_content = ''
with open(template_file, 'r') as file:
    template_file_content = file.read()

html_result = generate_html(input_file)

# substitute {{LIST}} in the template with the generated HTML content
html_result = template_file_content.replace('{{LIST}}', html_result)

# write the result to the output file
output_file = os.path.join(scripts_directory, 'index.html')
with open(output_file, 'w') as file:
    file.write(html_result)