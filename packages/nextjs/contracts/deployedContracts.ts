/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  devnet: {
    bettingcontract: {
      address:
        "0x41c4b110bbbcd87e34c03720f82944da60f60f5f003ed8d84423bbe8b81c309",
      abi: [
        {
          type: "impl",
          name: "BettingContract",
          interface_name: "contracts::bettingcontract::IBettingContract",
        },
        {
          type: "struct",
          name: "core::integer::u256",
          members: [
            {
              name: "low",
              type: "core::integer::u128",
            },
            {
              name: "high",
              type: "core::integer::u128",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::bettingcontract::IBettingContract",
          items: [
            {
              type: "function",
              name: "get_prize_pool",
              inputs: [],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_user_points",
              inputs: [
                {
                  name: "user",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "place_bet",
              inputs: [
                {
                  name: "bet_amount",
                  type: "core::integer::u256",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "transfer_prize",
              inputs: [
                {
                  name: "user",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_remaining_allowance",
              inputs: [
                {
                  name: "user",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [
                {
                  type: "core::integer::u256",
                },
              ],
              state_mutability: "view",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "initial_backend_address",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "currency",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::bettingcontract::BettingContract::BetPlaced",
          kind: "struct",
          members: [
            {
              name: "user",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "amount",
              type: "core::integer::u256",
              kind: "data",
            },
            {
              name: "points_earned",
              type: "core::integer::u256",
              kind: "data",
            },
            {
              name: "remaining_allowance",
              type: "core::integer::u256",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::bettingcontract::BettingContract::BettingApproved",
          kind: "struct",
          members: [
            {
              name: "user",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "amount",
              type: "core::integer::u256",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::bettingcontract::BettingContract::PrizeTransferred",
          kind: "struct",
          members: [
            {
              name: "user",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "data",
            },
            {
              name: "amount",
              type: "core::integer::u256",
              kind: "data",
            },
            {
              name: "timestamp",
              type: "core::integer::u64",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::bettingcontract::BettingContract::Event",
          kind: "enum",
          variants: [
            {
              name: "BetPlaced",
              type: "contracts::bettingcontract::BettingContract::BetPlaced",
              kind: "nested",
            },
            {
              name: "BettingApproved",
              type: "contracts::bettingcontract::BettingContract::BettingApproved",
              kind: "nested",
            },
            {
              name: "PrizeTransferred",
              type: "contracts::bettingcontract::BettingContract::PrizeTransferred",
              kind: "nested",
            },
          ],
        },
      ],
      classHash:
        "0x669f4b28586dc06d37acf35c926d59b4200e6094a7a0ceabdfcf4d3c96f1dc",
    },
  },
} as const;

export default deployedContracts;
