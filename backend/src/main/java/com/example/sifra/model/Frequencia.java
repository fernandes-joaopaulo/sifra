package com.example.sifra.model;

import java.sql.Date;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "frequencias")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Frequencia {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean presente;
    private Date dataRegistro;
    private Long aulaId;
    private Long discenteId;
}

