package com.jobscatch.careernavi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ResumeResponse {
    private String original;
    private String edited;
    private String note;
}
