package com.example.sifra.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "coordenadores")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Coordenador extends Usuario {

    private String departamento;

    // Getters e Setters
}

