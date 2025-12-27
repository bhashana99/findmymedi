package com.findmymedi.medicine_inventory_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class MedicineInventoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedicineInventoryServiceApplication.class, args);
	}

}
