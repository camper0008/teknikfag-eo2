FROM rust:1.76

WORKDIR /work

COPY . .

RUN ["cargo", "build", "--release"]

CMD ["/work/target/release/teknikfagsprojekt"]
