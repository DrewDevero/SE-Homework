package com.example.server.repository;

import com.example.server.model.Mexican;
import org.springframework.data.repository.CrudRepository;

// expresses how we can interact with with our model to update the repository

public interface MexicanRepository extends CrudRepository<Mexican, Long> {
    Mexican delete(Long id);
}
