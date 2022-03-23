package com.ssl.test.ssltest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/name")
    public String getName() {
        return "Hello World...";
    }

}
