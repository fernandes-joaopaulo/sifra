package com.example.sifra.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "turmas")
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Turma {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codigo;
    private Long disciplinaId;
    private Long discenteId;
    private Integer qtdAlunos;
}
