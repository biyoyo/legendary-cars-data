import json
import sys
import re

filename = sys.argv[1]
f = open(filename, "r")
contents = f.read()

parsed = json.loads(contents)
v = []
for line in parsed:
    if line[0] == "ВСИЧКО АВТОМОБИЛИ" or line[0] == "ОБЩО АВТОМОБИЛИ":
        v = line
        break

if v == []:
    print("Vehicles line not found!", file=sys.stderr)
    exit(1)

year = re.search("\d\d\d\d", parsed[0][0]).group(0)
refactored = [int(year) - 1, int(v[16]), int(v[1]), int(v[2]), int(v[3]), int(v[5])]
print(refactored)
