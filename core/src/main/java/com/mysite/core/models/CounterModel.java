package com.mysite.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.*;
import javax.annotation.PostConstruct;
import java.util.concurrent.atomic.AtomicInteger;

@Model(adaptables = SlingHttpServletRequest.class)
public class CounterModel {

    private static final AtomicInteger counter = new AtomicInteger(0);

    private int currentCount;

    @PostConstruct
    protected void init() {
        currentCount = counter.incrementAndGet();
    }

    public int getCount() {
        return currentCount;
    }
}