package com.example.sifra.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "discentes")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Discente extends Usuario {

    private String matricula;

    // Getters e Setters
}
