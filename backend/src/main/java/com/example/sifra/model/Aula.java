package com.example.sifra.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name = "aulas")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Aula {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.DATE)
    private LocalDate data;
    
    @ManyToOne
    @JoinColumn(name = "turma_id")
    private Turma turma;    
    
    @OneToMany(mappedBy = "aula", cascade = CascadeType.ALL)
    private List<Frequencia> frequencias;
}

