#!/usr/bin/env bash

set -e

BASEDIR=$(dirname "$0")
SCRIPT=`realpath $0`
SCRIPTPATH=`dirname $SCRIPT`

tmuxinator start nutan-utsav-app workspace=$SCRIPTPATH -p $BASEDIR/.tmuxinator.yml
