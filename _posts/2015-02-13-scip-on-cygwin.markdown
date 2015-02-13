---
layout: post
title:  "Installing scip on cygwin"
date:   2015-02-13 23:00:00
published: true
categories: installing
tags: SCIP Installing Cygwin
---
First you must download scipsuit from [here](http://scip.zib.de/download.php?fname=scipoptsuite-3.1.1.tgz).  

Then you must extract it with `tar xvfz scipopsuite-3.1.1.tgz` command.  

Do following steps in order to install scip on 32bit windows using cygwin
(unfortunately you cannot install scip on 64bit windows using cygwin)

1. Install these package bison, flex, pcre, gcc, g++, gcc-fortan, readline (Find them using search bar in cygwin installer)
2. Copy contents of [include folder]({{site.url}}/downloads/include.zip) into cygwin/usr/include
3. Copy contents of [lib folder]({{site.url}}/downloads/lib.zip) into cygwin/lib
4. Go to zimpl folder of scpisuite and issue make command
5. Go to scipsuite root directory and issue make command
6. Go to scpi/bin folder and run `./scip` everything must work and you must see welcome message as follow:

> parham@SVE14A27CXH ~/scipoptsuite-3.1.0/scip-3.1.0/bin  
> $ ./scip  
> SCIP version 3.1.0 [precision: 8 byte] [memory: block] [mode: optimized] [LP solver: SoPlex 2.0.0] [GitHash: 577ee45]  
> Copyright (c) 2002-2014 Konrad-Zuse-Zentrum fuer Informationstechnik Berlin (ZIB)  
> External codes:  
>	Readline 6.1         GNU library for command line editing (gnu.org/s/readline)  
>    	SoPlex 2.0.0         Linear Programming Solver developed at Zuse Institute Berlin (soplex.zib.de) [GitHash: 568f354]  
>	cppad-20140000.1     Algorithmic Differentiation of C++ algorithms developed by B. Bell (www.coin-or.org/CppAD)  
>       ZLIB 1.2.8           General purpose compression library by J. Gailly and M. Adler (zlib.net)  
>	GMP 6.0.0            GNU Multiple Precision Arithmetic Library developed by T.Granlund (gmplib.org)  
>	ZIMPL 3.3.2          Zuse Institute Mathematical Programming Language developed by T. Koch (zimpl.zib.de)  
>	user parameter file <scip.set> not found - using default parameters  
>  
> SCIP>  
