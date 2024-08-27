package com.sunbeam.controller;

import java.util.List;

import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebConfig implements WebMvcConfigurer{
	
	 @Override
	    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
	        converters.add(new ByteArrayHttpMessageConverter()); // Example for byte array
	        // Add other converters if needed
	    }

}
