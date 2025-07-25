package com.example.sifra.model;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "aulas")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Aula {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.DATE)
    private Date data;
    
    @ManyToOne
    @JoinColumn(name = "turma_id")
    private Turma turma;    
    
    @OneToMany(mappedBy = "aula", cascade = CascadeType.ALL)
    private List<Frequencia> frequencias;
}

