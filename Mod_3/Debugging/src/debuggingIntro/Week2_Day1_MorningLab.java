package debuggingIntro;

import java.util.regex.*;

public class Week2_Day1_MorningLab {
    public static void add(int a, int b) {
        int first = a;
        int second = b;
        first = first + second;
        System.out.println(first);
    }
    public static void subtract(int a, int b) {
        int first = a;
        int second = b;
        first = first - second;
        System.out.println(first);
    }
    public static void multiply(int a, int b) {
        int first = a;
        int second = b;
        first = first * second;
        System.out.println(first);
    }
    public static void divide(int a, int b) {
        int first = a;
        int second = b;
        first = first / second;
        System.out.println(first);
    }
    public static void match() {
        String password = "Ab1";
        int addOrChange = 0;
        boolean matches;
        System.out.println(Pattern.matches("[abc]", "a"));
        if(Pattern.matches("[abc]", password) == false) {
            addOrChange++;
            System.out.println(Pattern.matches("[abc]", password));
            System.out.println(addOrChange);
        }
    }
}
