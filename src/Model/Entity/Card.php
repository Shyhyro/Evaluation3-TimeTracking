<?php

namespace Shyhyro\Timetracking\Model\Entity;

class Card
{
    private ?int $id;
    private ?string $name;
    private ?int $time;

    /**
     * Subject constructor.
     * @param int|null $id
     * @param string|null $name
     * @param int|null $time
     */
    public function __construct(int $id = null, string $name = null, int $time = null)
    {
        $this->id = $id;
        $this->name = $name;
        $this->time = $time;
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string|null $name
     */
    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return int|null
     */
    public function getTime(): ?int
    {
        return $this->time;
    }

    /**
     * @param int|null $time
     */
    public function setTime(?int $time): void
    {
        $this->time = $time;
    }

}