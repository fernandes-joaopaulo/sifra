package com.example.sifra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.sifra.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {}
