package com.example.sifra.model;

import java.sql.Date;
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

    private Date data;
    private Long turmaId;
}

