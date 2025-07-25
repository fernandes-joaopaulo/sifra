package com.example.sifra.model;

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

    @ManyToOne
    @JoinColumn(name = "aula_id")
    private Aula aula;    
    
    @ManyToOne
    @JoinColumn(name = "discente_id")
    private Discente discente;
}

