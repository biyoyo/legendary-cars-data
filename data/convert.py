import json
import sys
import re

print("// year, total, petrol, gas, diesel, electric")
print("cars_count_data = [")

for i in range(1, len(sys.argv)):
    filename = sys.argv[i]
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
    gas = int(v[2]) + int(v[4]) + int(v[6]) + int(v[7]) + int(v[11]) + int(v[12]) + int(v[13])
    line = [int(year) - 1, int(v[16]), int(v[1]), gas, int(v[3]), int(v[5])]
    print(json.dumps(line) + ',')

print("]")

