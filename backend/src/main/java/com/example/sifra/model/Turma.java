package com.example.sifra.model;

import java.util.List;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "turmas")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Turma extends Disciplina{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codigo;

    @ManyToOne
    @JoinColumn(name = "disciplina_id")
    private Disciplina disciplina;

    @ManyToOne
    @JoinColumn(name = "docente_id")
    private Docente docente;
        
    @ManyToMany
    @JoinTable(
        name = "turma_discente", 
        joinColumns = @JoinColumn(name = "turma_id"), 
        inverseJoinColumns = @JoinColumn(name = "discente_id")
    )
    private List<Discente> discentes;    

    @OneToMany(mappedBy = "turma", cascade = CascadeType.ALL)
    private List<Aula> aulas;
}
