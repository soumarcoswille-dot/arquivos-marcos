import re
import os

file_path = 'Apresentacao_Presidente.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Function to increment slide IDs > 2
def replace_id(match):
    num = int(match.group(1))
    if num >= 3:
        return f'id="slide-{num+1}"'
    return match.group(0)

# Replace slide IDs
content = re.sub(r'id="slide-(\d+)"', replace_id, content)

# Change totalSlides to 17
content = content.replace('const totalSlides = 16;', 'const totalSlides = 17;')

# Also replace <!-- 3. A Mudança (Lei 14.300) --> to <!-- 4. A Mudança (Lei 14.300) -->
# and so on if we want, but doing a regex for comments is a nice touch
def replace_comment(match):
    num = int(match.group(1))
    if num >= 3:
        return f'<!-- {num+1}.'
    return match.group(0)

content = re.sub(r'<!-- (\d+)\.', replace_comment, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('HTML updated successfully.')
