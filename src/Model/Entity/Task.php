<?php

namespace Shyhyro\Timetracking\Model\Entity;

class Task
{
    private ?int $id;
    private ?int $card_fk;
    private ?string $name;
    private ?int $time;

    /**
     * Subject constructor.
     * @param int|null $id
     * @param int|null $card_fk
     * @param string|null $name
     * @param int|null $time
     */
    public function __construct(int $id = null, int $card_fk = null, string $name = null, int $time = null)
    {
        $this->id = $id;
        $this->card_fk = $card_fk;
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

    public function getCardFk(): ?int
    {
        return $this->card_fk;
    }

    public function setCardFk(?int $card_fk): Task
    {
        $this->card_fk = $card_fk;
        return $this;
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