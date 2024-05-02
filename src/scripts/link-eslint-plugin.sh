#!/bin/bash
# Ensure the script fails on error
set -e

# Path to the eslint custom plugin directory
PLUGIN_DIR="../eslint/eslint-custom-plugin"

# First, link the plugin globally if it hasn't been linked yet
echo "Checking if eslint-custom-plugin is globally linked..."
(cd $PLUGIN_DIR && yarn link)

# Check if the eslint-custom-plugin is linked in the current project
if [ ! -d "./node_modules/eslint-custom-plugin" ]; then
  echo "Linking eslint-custom-plugin into the project..."
  yarn link eslint-custom-plugin
else
  echo "eslint-custom-plugin is already linked in the project."
fi
