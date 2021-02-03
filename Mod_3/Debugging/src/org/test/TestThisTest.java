package org.test;

import org.debuggingIntro.TestThis;
import org.junit.Assert;
import org.junit.Test;

public class TestThisTest {
    TestThis testThis = new TestThis();
    @Test
    public void testGetNameAtIndex0() {
        Assert.assertEquals("Tony", testThis.getNamesAtIndex(2));
    }
    @Test
    public void testGetNameAtIndex1() {
        Assert.assertEquals("Mike", testThis.getNamesAtIndex(0));
    }
    @Test
    public void testAddName0() {
        testThis.addName("Jared");
        Assert.assertEquals("Jared", testThis.getNamesAtIndex(3));
    }
    @Test
    public void testAddName1() {
        testThis.addName("Angel");
        Assert.assertEquals("Angel", testThis.getNamesAtIndex(3));
    }
    @Test
    public void testGetNames() {
        System.out.println(testThis.getNames());
    }
}
