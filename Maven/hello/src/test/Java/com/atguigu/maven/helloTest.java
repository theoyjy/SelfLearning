package com.atguigu.maven;
import org.junit.Test;
import static junit.framework.Assert.*;
public class helloTest {
    @Test
    public void testHello(){
        hello h= new hello();
        String Results= h.sayHello("Sky");
        assertEquals("Hello Sky!",Results);
    }
}