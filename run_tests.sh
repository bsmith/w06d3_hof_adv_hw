#!bash

for d in *; do
	[ -d "$d" ] && (cd "$d"; npm test)
done
