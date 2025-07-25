package com.example.sifra.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
@Entity
@Table(name = "admins")
public class Admin extends Usuario {
    // Nenhum campo adicional
}
