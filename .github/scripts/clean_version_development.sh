#!/bin/bash
VERSION=$(npm run --silent get-version)
echo "Version: $VERSION"

if [[ "$VERSION" =~ "staging" ]]; then
  CLEANED_VERSION=$(echo "$VERSION" | sed "s/-staging.*//")
  echo "Cleaned Version: $CLEANED_VERSION"

  yarn version --new-version "$CLEANED_VERSION" --no-git-tag-version --no-commit-hooks
else
  echo "No need to clean version"
fi
