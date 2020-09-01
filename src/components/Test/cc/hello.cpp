#include "stdafx.h" 
#include "hello.h"
#include <iostream>
using namespace std;
float Add(float plus1, float plus2)
{
    float add_result = plus1 + plus2;
    return add_result;
}

char *Hello()
{
    return "Hello This is Cpp Addon";
}

int StrLength(char *str)
{
    return strlen(str);
}