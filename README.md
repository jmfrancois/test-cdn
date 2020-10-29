| command | time before | time after |
| ------- | ----------- | ---------- |
| npm i   | same        | same       |

|

# Compilation time

Command: `rm -rf node_modules/.cache && time talend-script build`

BEFORE:
real 0m42.896s
user 1m6.525s
sys 0m6.478s

AFTER
real 0m10.451s
user 0m13.424s
sys 0m2.242s

Command: `time talend-script build` aka no cache

BEFORE
real 0m19.221s
user 0m28.354s
sys 0m3.965s

AFTER

real 0m10.956s
user 0m10.377s
sys 0m2.524s

# loading time

Command: `talend-script start` //then open the browser and look at the loading time

## no cache

net work configured on Fast 3G
no cache

BEFORE:
Load: 15.05s
Finish: 15.64s

AFTER:
Load: 14.88s
Finish: 15.46s

## cache loaded and activated

net work configured on Fast 3G
cache

BEFORE:
Load: 2.28s
Finish: 2.86s

AFTER:
Load: 5.35s
Finish: 5.94s

# POC 2: build lib on talend side aka talend-umds

nbrequests:51
resources:4.6MB

cache:
Finish:5.32s
data transfered:14kB

nocache:
Finish:6.68s
data transfered:1.1MB

# inject true

47 requests (36 pour JS)
4.6MB resources (4.3 JS)

with cache:
1.39s Finish
1.30s Load

disable cache:
3.40s Finish
2.13s Load
