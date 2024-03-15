package com.springwebapp.taskproj.Payload;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;
@NoArgsConstructor
@Getter
@Setter
public class UserDto {
    private Integer id;

    @NotEmpty
    @Size(min=4,message = "Username must be a minimum of 4 characters !!")
    private String name;

    @Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}",
            flags = Pattern.Flag.CASE_INSENSITIVE,message = "Email address is not valid !!")
    private String email;

    @NotNull
    private Integer age;

    @NotNull
    private Date dob;
}

