package org.perscholas.homework;

public class GetUp {
    public static void getUp(boolean squawking, int currentHour) {
        if(squawking) {
            if (currentHour < 6 && currentHour >= 0 || currentHour == 23) {
                System.out.println(true);
            } else if (currentHour < 0 || currentHour > 23) {
                System.out.println(false);
            } else {
                System.out.println(false);
            }
        } else {
            if (currentHour < 6 && currentHour >= 0 || currentHour == 23) {
                System.out.println(true);
            } else if (currentHour < 0 || currentHour > 23) {
                System.out.println(false);
            } else {
                System.out.println(false);
            }
        }
    }
}
