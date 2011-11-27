#!/bin/bash -eu
#
# Copyright 2011 Google Inc.
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
#      http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
################################################################################
#
# Generates all compiled Javascript files for the demos.

if [[ "$(basename $(pwd))" != "demo" ]]; then
  echo "$(basename $0): must run from the 'demo' directory." >&2
  exit 1
fi

readonly GAMEBUILDER=".."
readonly RUN_CLOSURE_COMPILER="${GAMEBUILDER}/tools/run_closure_compiler.sh"

# Args:
#   $1: base file pattern for output and compiler stderr output.
#   $2: namespace to export
run_closure_compiler() {
  local pattern="$1"
  local output="out/${pattern}_out.js"
  local stderr="out/${pattern}.err"

  local ns="$2"

  echo -n "Building $output (errors in $stderr) ... "
  env GAMEBUILDER=${GAMEBUILDER} \
      ${RUN_CLOSURE_COMPILER} \
      -o script \
      --output_file="$output" \
      --root=$(pwd)/src \
      --namespace=$ns \
      2> "${stderr}" || {
    # Display the compiler error messages and exit immediately.
    echo
    echo "Errors found:"
    cat "$stderr"
    exit 2
  }
  echo "done."
}

run_closure_compiler chess_fen demo.chess
run_closure_compiler go demo.go

echo
echo "JS compilation complete."