package org.test;

import org.debuggingIntro.CalcForTesting;
import org.junit.Assert;
import org.junit.Test;

public class CalculatorTest {
    @Test
    public void testAdding() {
        Assert.assertEquals(12, CalcForTesting.adding(6,6));
    }
    @Test
    public void testSubtract() {
        Assert.assertEquals(4, CalcForTesting.subtracting(8, 4));
    }
    @Test
    public void testMultiply() {
        Assert.assertEquals(30, CalcForTesting.multiplying(5, 6));
    }
    @Test
    public void testDivide() {
        Assert.assertEquals(10, CalcForTesting.dividing(200, 20));
    }
}
