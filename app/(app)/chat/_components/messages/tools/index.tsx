'use client'

import React from 'react'

import {
    Balance,
    GetWalletAddress,
    GetTrendingTokens,
    GetTokenData,
    Trade,
    Stake,
    Unstake,
    AllBalances,
    Lend,
    LiquidStakingYields,
    Transfer,
    GetTokenAddress,
    GetTopHolders,
    BubbleMaps
} from './solana'

import { SearchRecentTweets } from './twitter'

import { SearchKnowledge } from './knowledge'

import { CopyTraderWorker, XWatcherWorker } from './worker-generator';

import { 
    SOLANA_BALANCE_NAME,
    SOLANA_GET_WALLET_ADDRESS_NAME,
    SOLANA_GET_TRENDING_TOKENS_NAME,
    SOLANA_GET_TOKEN_DATA_NAME,
    SOLANA_TRADE_NAME,
    SOLANA_LEND_NAME,
    SOLANA_STAKE_NAME,
    SOLANA_UNSTAKE_NAME,
    SOLANA_ALL_BALANCES_NAME,
    TWITTER_SEARCH_RECENT_NAME,
    SEARCH_KNOWLEDGE_NAME,
    SOLANA_LIQUID_STAKING_YIELDS_NAME,
    SOLANA_TRANSFER_NAME,
    SOLANA_GET_TOKEN_ADDRESS_NAME,
    SOLANA_TOP_HOLDERS_NAME,
    SOLANA_BUBBLE_MAPS_NAME,
    X_WATCHER_WORKER_NAME,
    COPY_TRADER_WORKER_NAME
} from '@/ai/action-names'

import type { ToolInvocation as ToolInvocationType } from 'ai'
import { INVOKE_AGENT_NAME } from '@/ai/invoke/actions/invoke-agent/name'
import { InvokeAgent } from './invoke'

interface Props {
    tool: ToolInvocationType,
    prevToolAgent?: string,
}

const ToolInvocation: React.FC<Props> = ({ tool, prevToolAgent }) => {

    const toolParts = tool.toolName.split("-");
    const toolName = toolParts.slice(1).join("-");
    
    switch(toolName) {
        case SOLANA_BALANCE_NAME:
            return <Balance tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_GET_WALLET_ADDRESS_NAME:
            return <GetWalletAddress tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_GET_TRENDING_TOKENS_NAME:
            return <GetTrendingTokens tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_GET_TOKEN_DATA_NAME:
            return <GetTokenData tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_TRADE_NAME:
            return <Trade tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_LIQUID_STAKING_YIELDS_NAME:
            return <LiquidStakingYields tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_TRANSFER_NAME:
            return <Transfer tool={tool} prevToolAgent={prevToolAgent} />
        case TWITTER_SEARCH_RECENT_NAME:
            return <SearchRecentTweets tool={tool} />
        case SOLANA_LEND_NAME:
            return <Lend tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_STAKE_NAME:
            return <Stake tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_UNSTAKE_NAME:
            return <Unstake tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_ALL_BALANCES_NAME:
            return <AllBalances tool={tool} prevToolAgent={prevToolAgent} />
        case SEARCH_KNOWLEDGE_NAME:
            return <SearchKnowledge tool={tool} prevToolAgent={prevToolAgent} />
        case INVOKE_AGENT_NAME:
            return <InvokeAgent tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_GET_TOKEN_ADDRESS_NAME:
            return <GetTokenAddress tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_TOP_HOLDERS_NAME:
            return <GetTopHolders tool={tool} prevToolAgent={prevToolAgent} />
        case SOLANA_BUBBLE_MAPS_NAME:
            return <BubbleMaps tool={tool} prevToolAgent={prevToolAgent} />
        case X_WATCHER_WORKER_NAME:
            return <XWatcherWorker tool={tool} prevToolAgent={prevToolAgent} />
        case COPY_TRADER_WORKER_NAME:
            return <CopyTraderWorker tool={tool} prevToolAgent={prevToolAgent} />
        default:
            return (
                <pre className="whitespace-pre-wrap">
                    {JSON.stringify(tool, null, 2)}
                </pre>
            );
    }
}

export default ToolInvocation