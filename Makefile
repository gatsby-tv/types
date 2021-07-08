APP_NAME ?= `grep '"name":' package.json | cut -d '"' -f4`
APP_VERSION ?= `grep '"version":' package.json | cut -d '"' -f4`
PUBLISHED_VERSION ?= npm show @gatsby-tv/types version
BUILD ?= `git rev-parse --short HEAD`

build:
	yarn format:check
	yarn build

check:
# Check if package version is newer than current published
	ifeq ($(PUBLISHED_VERSION), $(APP_VERSION))
		$(error Published and local package versions are the same!)
	endif

push:
	npm publish
