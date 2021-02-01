package org.debuggingIntro;

import static org.debuggingIntro.Week2_Day1_MorningLab.*;
import static org.debuggingIntro.CalcForTesting.*;

public class Calculator {
    public static void main(String[] args) {

        int a = 5;
        int b = '6';

        a = b + a;
        System.out.println("variable a: "+ a);

        add(5, '4');
        subtract(5, '4');
        multiply(5, '4');
        divide(5, '4');
        adding(5, '4');
        subtracting(5, '4');
        multiplying(5, '4');
        dividing(5, '4');
    }
}
