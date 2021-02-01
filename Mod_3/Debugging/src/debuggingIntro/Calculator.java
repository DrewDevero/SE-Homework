package debuggingIntro;

import static debuggingIntro.Week2_Day1_MorningLab.*;

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
        match();
    }
}
