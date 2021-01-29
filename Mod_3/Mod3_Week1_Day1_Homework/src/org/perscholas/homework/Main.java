package org.perscholas.homework;

import static org.perscholas.homework.Reverse.*;
import static org.perscholas.homework.Prime.*;
import static org.perscholas.homework.GetUp.*;

public class Main {
    public static void main(String[] args) {
        reverse("Hello HW");
        prime(20);
        getUp(true, 16);
        getUp(true, 3);
        getUp(false, 3);
        getUp(true, 25);
    }
}
