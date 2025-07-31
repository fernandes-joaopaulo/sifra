package com.example.sifra.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name = "frequencias")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Frequencia {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean presente;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "aula_id")
    private Aula aula;    
    
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "discente_id")
    private Discente discente;
}

