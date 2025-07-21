package com.example.sifra.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "docentes")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Docente extends Usuario {

    private String departamento;
}
