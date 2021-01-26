#!/usr/bin/env python3
# -*- coding: utf-8 -*-


import sys
import os
__author__ = 'huong'

commit = sys.argv[1] if len(sys.argv) > 1 else input('请输入git提交记录: ')
os.system('git add -A && git commit -m"%s" && git push origin master' % commit)
