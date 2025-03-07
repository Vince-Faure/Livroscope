package com.formation.gestionbibliotheque.dtos;


import com.formation.gestionbibliotheque.models.BookModel;
import lombok.*;

import java.time.Instant;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class LoanDto {
    private long id;
    private Instant borrowedAt;
    private Instant returnDate;
    private Instant returnedAt;
    private String bookTitle;
    private String userUsername;
}
