#!/bin/bash
rm ../.git/hooks/pre-push
ln .pre-push .git/hooks/pre-push
