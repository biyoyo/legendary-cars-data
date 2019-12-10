import json
import sys
import re

cars_count = []
cars_age = []

for i in range(1, len(sys.argv)):
    filename = sys.argv[i]
    year = re.search("\d\d\d\d", filename).group(0)

    f = open(filename, "r")
    contents = f.read()

    parsed = json.loads(contents)

    if "count" in filename:
        v = []
        for line in parsed:
            if line[0] == "ВСИЧКО АВТОМОБИЛИ" or line[0] == "ОБЩО АВТОМОБИЛИ":
                v = line
                break

        if v == []:
            print("Error parsing ", filename, ": Vehicles line not found!", file=sys.stderr)
            continue

        gas = int(v[2]) + int(v[4]) + int(v[6]) + int(v[7]) + int(v[11]) + int(v[12]) + int(v[13])
        line = [int(year), int(v[16]), int(v[1]), gas, int(v[3]), int(v[5])]
        cars_count.append(line)
    elif "age" in filename:
        v = []
        for line in parsed:
            if line[0] == "Общо":
                v = line
                break

        if v == []:
            print("Error parsing ", filename, ": Vehicles line not found!", file=sys.stderr)
            continue

        line = [int(year), int(v[1]), int(v[2]), int(v[3]), int(v[4]), int(v[5])]
        cars_age.append(line)

print("// year, total, petrol, gas, diesel, electric")
print("cars_count_data = ", json.dumps(cars_count, sort_keys=True))
print()
print("// year, 0-5, 6-10, 11-15, 15-20, 20+ years old")
print("cars_age_data = ", json.dumps(cars_age, sort_keys=True))

