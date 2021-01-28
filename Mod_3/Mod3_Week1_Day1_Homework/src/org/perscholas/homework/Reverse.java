package org.perscholas.homework;

import java.util.*;

public class Reverse {
    public static void reverse(String word) {

        String reversedWord = "";
        char[] wordArray = word.toCharArray();
        for(int i = word.length() - 1; i > -1; i--)
            reversedWord += wordArray[i];
        System.out.println(reversedWord);
    }
}

