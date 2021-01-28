package org.perscholas.homework;

public class Prime {
    public static void prime(int number) {
        int iterator = 0;
        while(iterator < number + 1) {
            if(iterator == 2 || iterator == 3 || iterator == 5 || iterator == 7 || iterator % 2 != 0 && iterator % 3 != 0 && iterator % 5 != 0 && iterator % 7 != 0 ) {
                System.out.println(iterator);
            }
            iterator++;
        }
    }
}
